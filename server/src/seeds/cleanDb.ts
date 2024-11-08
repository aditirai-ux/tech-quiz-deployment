// import Question from '../models/index.js';
import db from '../config/connection.js';
import models from '../models/index.js';

export default async (modelName: keyof typeof models , collectionName: string) => {
  try {
    let modelExists = [];
    if (models[modelName] && models[modelName].db) {
      if (models[modelName].db.db) {
        modelExists = await models[modelName].db.db.listCollections({
          name: collectionName
        }).toArray();
      }
    }

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
