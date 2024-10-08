const asyncHandler = require('express-async-handler');

async function paginate(model, page = 1, limit = 10, filter = {}, populate = []) {
  page = Number(page);
  limit = Number(limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  const amountDocuments = await model.find(filter).countDocuments().exec();
  if (endIndex < amountDocuments) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  results.results = await model
    .find(filter)
    .populate(populate)
    .limit(limit)
    .skip(startIndex)
    .exec();
  return results;
}

module.exports = {
  paginate,
};
