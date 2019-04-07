'use strict';

const uuid = require('uuid/v4');
const _ = require('lodash');

class Portfolio {
  constructor(data) {
    const { id, name, userId } = data;
    if (!name) {
      throw new Error('missing.property:data.name');
    }
    if (!userId) {
      throw new Error('missing.property:data.userId');
    }

    this.id = id || uuid();
    this.name = name;
    this.userId = userId;
  }

  async save() {
    return _store.save(this);
  }

  async addStock(stock) {
    const portfolioId = this.id;
    const stockId = stock.id;
    const member = new PortfolioStock({ portfolioId, stockId });
    return _store.addMembership(member);
  }

  async listStocks() {
    return _store.memberships
      .filter((member) => member.portfolioId === this.id);
  }

  static async find(conditions = []) {
    const list = _store.list();
    return _.entries(conditions).reduce((acc, [key, value]) => {
      return acc.filter((i) => i[key] === value);
    }, list);
  }

  static async findById(id) {
    if (!id) {
      throw new Error('missing.param:id');
    }
    return _store.get(id);
  }
}

class PortfolioStock {
  constructor(data) {
    const { id, portfolioId, stockId } = data;
    if (!portfolioId) {
      throw new Error('missing.property:data.portfolioId');
    }
    if (!stockId) {
      throw new Error('missing.property:data.stockId');
    }

    this.id = id || uuid();
    this.portfolioId = portfolioId;
    this.stockId = stockId;
  }
}

class PortfolioStore {
  constructor(seedData = []) {
    const seeds = (seedData.length)
      ? seedData.map((s) => new Portfolio(s))
      : [];

    this.portfolios = [].concat(seeds);
    this.memberships = [];
  }

  list() {
    return [].concat(this.portfolios);
  }

  get(id) {
    return this.portfolios.find((p) => p.id === id) || [];
  }

  save(portfolio) {
    this.portfolios = [].concat(this.portfolios, portfolio);
    return portfolio;
  }

  addMembership(portfolioStock) {
    this.memberships = [].concat(this.memberships, portfolioStock);
    return portfolioStock;
  }
}

const seedData = [
  { name: 'high-risk', userId: 'me' },
  { name: 'low-risk', userId: 'me' },
  { name: 'medium-risk', userId: 'me' },
];

const seedPortfolioStock = [
  { id: '1db6643f-b505-44f9-a55d-3276f75b5e8c'}
]

const _store = new PortfolioStore(seedData);

module.exports = Portfolio;

// async function main () {
//   console.log(await Portfolio.find());
//   const test = new Portfolio({ name: 'testing', userId: 'you' });
//   const doc = await test.save();
//   console.log('doc:', doc);
//   console.log(await Portfolio.find());
// }

// main();
