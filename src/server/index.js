import qs from 'qs';

import humps from 'humps';

import operatorsAliases from './utils/operators-aliases';
import router from './routes/index';

let aliases = Object.keys(operatorsAliases);

export default function init(app) {
  app.use('/', (req, res, next) => {
    if (req._parsedUrl.search) {
      req.query = qs.parse(req._parsedUrl.search.replace('?', ''), {
        depth: 10,
      });
    }

    req.query = humps.decamelizeKeys(req.query, function (key, convert, options) {
      return aliases.includes(key) ? key : convert(key, options);
    });

    req.body = humps.decamelizeKeys(req.body, {
      separator: '_',
    });

    next();
  });

  app.use(router);

  app.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
  });
}
