/*
 * @slack #reuse
 */

function a(b){
	console.log(true);
}

/*
 * @slack #reuse
 */

function b(b){
	console.log(true);
}

/*
 * @slack #reuse
 */

function c(b){
	console.log(true);
}

/*
 * @slack #reuse
 */

function d(b){
	console.log(true);
}

/*
 * @slack #reuse
 */

function e(b){
	console.log(true);
}

/*
 * @slack #reuse
 */

function avichay(shahar){
	return lior;
}

/*
 * @slack #reuse
 */

function avichay2(shahar){
	return lior;
}

/*
 * @slack this function will output lior from avichay3 #reuse
 */

function avichay3(shahar){
	return lior;
}

/*
 * @slack this function will output lior from avichay3 #reuse
 */

function avichay4(shahar){
	return lior;
}

/*
 * @slack this function will output lior from avichay5 #reuse
 */

function avichay5(shahar){
	return lior;
}


/*
*
* @slack I believe this function can be used globally, please let me know what you think #reuse
*
*/
function parseParams (cmd, args, cb) {
  var params = {}
  if (cmd === 'grant') {
    params.permissions = args.shift()
  }
  if (['grant', 'revoke', 'ls-packages'].indexOf(cmd) !== -1) {
    var entity = (args.shift() || '').split(':')
    params.scope = entity[0]
    params.team = entity[1]
  }
  getPackage(args.shift(), function (err, pkg) {
    if (err) { return cb(err) }
    params.package = pkg

    if (!params.scope && cmd === 'ls-packages') {
      whoami([], true, function (err, scope) {
        params.scope = scope
        cb(err, params)
      })
    } else {
      if (cmd === 'ls-collaborators') {
        params.user = args.shift()
      }
      cb(null, params)
    }
  })
}
