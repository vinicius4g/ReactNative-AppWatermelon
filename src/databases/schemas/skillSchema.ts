import {  tableSchema } from '@nozbe/watermelondb';

//cade schema uma tabla

export const skillSchema = tableSchema({
  name: 'skills',
  columns: [
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'type',
      type: 'string'
    },
  ]
});