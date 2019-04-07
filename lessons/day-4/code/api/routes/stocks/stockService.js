'use strict';

const StockModel = require('./stockModel');

exports.listStocks = async () => await StockModel.find();

exports.listStocksByPortfolio = async (portfolioId) => {
  const portfolio = await PortfolioModel.findById(portfolioId);
  return await portfolio.listStocks();
};

exports.createStock = async (stockData) => {
  const stock = new StockModel(stockData);
  try {
    const doc = await stock.save();
    return doc;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
