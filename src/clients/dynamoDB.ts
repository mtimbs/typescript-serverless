export interface DynamoDBBaseItem {
  pk: string;
  sk: string;
  type: string;
  ttl?: number;
  gsi1pk?: string;
  gsi1sk?: string;
  gsi2pk?: string;
  gsi2sk?: string;
}
