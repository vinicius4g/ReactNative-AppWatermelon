import { appSchema } from '@nozbe/watermelondb';

import { skillSchema } from './skillSchema';


//version muda -> recria as tabelas //migrations
//models dados que vamos armazenar dentro de cada tabela

export const schemas = appSchema({
  version: 2,
  tables: [ skillSchema ]
});