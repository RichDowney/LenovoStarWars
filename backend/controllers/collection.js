import collectionData from '../static_data/collection.js';
import Response from '../models/Response.js'

const getCurrentUserCollection = async (req, res) => {
    const currentUserId = res.locals.userId;
    // await is here to act as though we are getting data via a db connection
    const filteredCollectionData = await collectionData.reduce(function(filtered, item) {
        if (item.user_id == currentUserId) {
           var limitedData = { name: item.name, description: item.description }
           filtered.push(limitedData);
        }
        return filtered;
      }, []);
    res.status(200).json(new Response(filteredCollectionData));
};

export { getCurrentUserCollection };