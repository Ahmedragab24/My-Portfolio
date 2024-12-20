import { Iproject } from '@/interfaces';
import { Client, Databases } from 'appwrite';

const client = new Client();
client
  .setEndpoint(`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}`)
  .setProject(`${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`); 

const databases = new Databases(client);

export { client, databases };


export const addData = async (data: Iproject) => {
    try {
      const response = await databases.createDocument(
        `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`, 
        `${process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PROJECTS}`,
        'unique()', // معرف فريد للوثيقة
        data // البيانات المرسلة
      );
      return response;
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };
  
  export const getData = async () => {
    try {
      const response = await databases.listDocuments(
        `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`,
        `${process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PROJECTS}`
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  export const getProjectById = async (id : string) => {
    try {
      const response = await databases.getDocument(
        `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`,
        `${process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PROJECTS}`, // Collection ID
        id 
      );
      return response;
    } catch (error) {
      console.error("Error fetching project by ID:", error);
      return null; // Return null if there is an error
    }
  };

  export const getCategories = async (): Promise<any> => {
    try {
      const response = await databases.listDocuments(
        `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`,
        `${process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CATEGORIES}`
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  