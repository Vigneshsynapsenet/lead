import { DataSource } from 'typeorm';

import { SeedObjectMetadataIds } from 'src/database/typeorm-seeds/metadata/object-metadata';
import { SeedWorkspaceId } from 'src/database/seeds/metadata';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';

const fieldMetadataTableName = 'fieldMetadata';

export enum SeedViewFieldFieldMetadataIds {
  Id = '20202020-64f2-4ecf-b4c5-45daf154756a',
  CreatedAt = '20202020-e137-4e59-b417-a134c050936c',
  UpdatedAt = '20202020-17ff-4585-9f3b-cd9ee9523448',

  FieldMetadataId = '20202020-1a5e-4ac1-9530-c7fff8481b79',
  IsVisible = '20202020-3aa9-42db-a74d-0fd6b7cb7c4a',
  Size = '20202020-b9a1-4c2e-a5af-3a6b4fef4af6',
  Position = '20202020-a4bb-440a-add2-81dbd9a74517',
  View = '20202020-8788-4508-b771-719807b60e61',
}

export const seedViewFieldFieldMetadata = async (
  workspaceDataSource: DataSource,
  schemaName: string,
) => {
  await workspaceDataSource
    .createQueryBuilder()
    .insert()
    .into(`${schemaName}.${fieldMetadataTableName}`, [
      'id',
      'objectMetadataId',
      'isCustom',
      'workspaceId',
      'isActive',
      'type',
      'name',
      'label',
      'targetColumnMap',
      'description',
      'icon',
      'isNullable',
      'isSystem',
    ])
    .orIgnore()
    .values([
      // Default fields
      {
        id: SeedViewFieldFieldMetadataIds.Id,
        objectMetadataId: SeedObjectMetadataIds.ViewField,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.UUID,
        name: 'id',
        label: 'Id',
        targetColumnMap: {
          value: 'id',
        },
        description: undefined,
        icon: undefined,
        isNullable: true,
        isSystem: true,
      },
      {
        id: SeedViewFieldFieldMetadataIds.CreatedAt,
        objectMetadataId: SeedObjectMetadataIds.ViewField,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.DATE,
        name: 'createdAt',
        label: 'Creation date',
        targetColumnMap: {
          value: 'createdAt',
        },
        description: undefined,
        icon: 'IconCalendar',
        isNullable: true,
        isSystem: false,
      },
      {
        id: SeedViewFieldFieldMetadataIds.UpdatedAt,
        objectMetadataId: SeedObjectMetadataIds.ViewField,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.DATE,
        name: 'updatedAt',
        label: 'Update date',
        targetColumnMap: {
          value: 'updatedAt',
        },
        description: undefined,
        icon: 'IconCalendar',
        isNullable: true,
        isSystem: false,
      },
      // Fields
      {
        id: SeedViewFieldFieldMetadataIds.FieldMetadataId,
        objectMetadataId: SeedObjectMetadataIds.ViewField,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.TEXT,
        name: 'fieldMetadataId',
        label: 'Field Metadata Id',
        targetColumnMap: {
          value: 'fieldMetadataId',
        },
        description: 'View Field target field',
        icon: 'IconTag',
        isNullable: false,
        isSystem: false,
      },
      {
        id: SeedViewFieldFieldMetadataIds.View,
        objectMetadataId: SeedObjectMetadataIds.ViewField,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.RELATION,
        name: 'view',
        label: 'View Id',
        targetColumnMap: { value: 'viewId' },
        description: 'View Field related view',
        icon: 'IconLayoutCollage',
        isNullable: false,
        isSystem: false,
      },
      {
        id: SeedViewFieldFieldMetadataIds.IsVisible,
        objectMetadataId: SeedObjectMetadataIds.ViewField,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.BOOLEAN,
        name: 'isVisible',
        label: 'Visible',
        targetColumnMap: {
          value: 'isVisible',
        },
        description: 'View Field visibility',
        icon: 'IconEye',
        isNullable: false,
        isSystem: false,
      },
      {
        id: SeedViewFieldFieldMetadataIds.Size,
        objectMetadataId: SeedObjectMetadataIds.ViewField,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.NUMBER,
        name: 'size',
        label: 'Size',
        targetColumnMap: {
          value: 'size',
        },
        description: 'View Field size',
        icon: 'IconEye',
        isNullable: false,
        isSystem: false,
      },
      {
        id: SeedViewFieldFieldMetadataIds.Position,
        objectMetadataId: SeedObjectMetadataIds.ViewField,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.NUMBER,
        name: 'position',
        label: 'Position',
        targetColumnMap: {
          value: 'position',
        },
        description: 'View Field position',
        icon: 'IconList',
        isNullable: false,
        isSystem: false,
      },
    ])
    .execute();
};