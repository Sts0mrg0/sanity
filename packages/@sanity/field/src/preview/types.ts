import {ComponentType} from 'react'
import {UserColor} from '@sanity/base/user-color'
import {
  ArraySchemaType,
  BooleanSchemaType,
  StringSchemaType,
  NumberSchemaType,
  ObjectSchemaType
} from '../diff'

export type PreviewComponent<T> = ComponentType<{
  value: T
  schemaType: T extends Array<any>
    ? ArraySchemaType
    : T extends boolean
    ? BooleanSchemaType
    : T extends string
    ? StringSchemaType
    : T extends number
    ? NumberSchemaType
    : T extends object
    ? ObjectSchemaType
    : any
  color?: UserColor
}>
