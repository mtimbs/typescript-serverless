import { DynamoDBRecord, AttributeValue } from 'aws-lambda';
import { Converter } from 'aws-sdk/clients/dynamodb';
import { DynamoDBBaseItem } from '@src/clients/dynamoDB';

// This item would actually extend the DynamoDBBaseItem
export const newStreamRecord = (item: DynamoDBBaseItem): DynamoDBRecord => ({
  awsRegion: 'ap-southeast-2',
  eventID: '',
  eventName: 'INSERT', // 'INSERT' | 'MODIFY' | 'REMOVE'
  eventSource: '',
  eventSourceARN: '',
  eventVersion: '',
  userIdentity: null,
  dynamodb: {
    Keys: {
      pk: {
        S: item.pk,
      },
      sk: {
        S: item.sk,
      },
    },
    NewImage: Converter.marshall(item) as Record<string, AttributeValue>,
  },
});

export const duplicateStreamRecord = (item: DynamoDBBaseItem): DynamoDBRecord => ({
  awsRegion: 'ap-southeast-2',
  eventID: '',
  eventName: 'MODIFY', // 'INSERT' | 'MODIFY' | 'REMOVE'
  eventSource: '',
  eventSourceARN: '',
  eventVersion: '',
  userIdentity: null,
  dynamodb: {
    Keys: {
      pk: {
        S: item.pk,
      },
      sk: {
        S: item.sk,
      },
    },
    NewImage: Converter.marshall(item) as Record<string, AttributeValue>,
    OldImage: Converter.marshall(item) as Record<string, AttributeValue>,
  },
});

export const deleteStreamRecord = (item: DynamoDBBaseItem): DynamoDBRecord => ({
  awsRegion: 'ap-southeast-2',
  eventID: '',
  eventName: 'REMOVE', // 'INSERT' | 'MODIFY' | 'REMOVE'
  eventSource: '',
  eventSourceARN: '',
  eventVersion: '',
  userIdentity: null,
  dynamodb: {
    Keys: {
      pk: {
        S: item.pk,
      },
      sk: {
        S: item.sk,
      },
    },
    OldImage: Converter.marshall(item) as Record<string, AttributeValue>,
  },
});
