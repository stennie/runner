/* eslint no-sync:0 */

var run = require('../');
var kill = require('kill-mongodb');

describe('Test Spawning MongoDB Deployments', function() {
  before(function(done) {
    kill(done);
  });

  describe('Standalone', function() {
    var opts = {
      action: 'start',
      name: 'mongodb-runner-test-standalone',
      port: 27000
    };

    it('should start a standalone', function(done) {
      run(opts, function(err) {
        if (err) {
          return done(err);
        }
        opts.action = 'stop';
        run(opts, function(err) {
          if (err) {
            return done(err);
          }
          done();
        });
      });
    });
  });

  describe('Replicaset', function() {
    var opts = {
      action: 'start',
      name: 'mongodb-runner-test-replicaset',
      port: 30000,
      topology: 'replicaset'
    };

    it('should start a replicaset', function(done) {
      run(opts, function(err) {
        if (err) {
          return done(err);
        }
        opts.action = 'stop';
        run(opts, function(err) {
          if (err) {
            return done(err);
          }
          done();
        });
      });
    });
  });

  describe('Cluster', function() {
    var opts = {
      action: 'start',
      name: 'mongodb-runner-test-cluster',
      shardPort: 33000,
      configPort: 33100,
      port: 33200,
      shards: 3,
      topology: 'cluster'
    };

    it('should start a cluster', function(done) {
      run(opts, function(err) {
        if (err) {
          return done(err);
        }
        opts.action = 'stop';
        run(opts, function(err) {
          if (err) {
            return done(err);
          }
          done();
        });
      });
    });
  });
});
