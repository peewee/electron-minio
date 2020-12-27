
/* s3Client.getBucketPolicy('negrone', function(err, policy) {
  if (err) throw err
  console.log(`Bucket policy file: ${policy}`)
}) */

console.log('Hullo app.js')
///console.dir()

///const Minio = new NodeMinio(config);=

///console.log('Hullo app.js')
///console.dir( Minio//)

import "./stylesheets/main.css";

// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
import { getBuckets, cube } from "./Minio/Minio.ts";

console.log("Minio reply: cube(3)", cube(3))


//let bucketsList = 'fuckit'
async function asyncCall() {
  const result = await getBuckets();

  let names = await makeUL(result)
  console.log( names )

  document.querySelector("#buckets-list").appendChild( names )
  // document.querySelector("#buckets-list").innerHTML = names
}
asyncCall();


function makeUL(array) {
  // Create the list element:
  var list = document.createElement('ol');
    list.className = 'orderedList'

    

  for (var i = 0; i < array.length; i++) {
      // Create the list item:
      var item = document.createElement('li');
      item.className = "oList-item"
      
      item.addEventListener("mouseover", function( event ) {
        event.target.style.color = "purple";
      })
      item.addEventListener("mouseout", function( event ) {
        event.target.style.color = "";
      })
      item.addEventListener("click", function( event ) {
        console.log('Clicked!')
      })

      // Set its contents:
      let shortName = shortname(array[i].name)
      console.log( shortName )

      item.appendChild(document.createTextNode(array[i].name));

      // Add it to the list:
      list.appendChild(item);
  }

  // Finally, return the constructed list:
  // console.log( list )
  return list;
}

function shortname(fullName) {

  return fullName.replace( /[-_]/g, " ")

  /*
  return fullName
    .replace(".", "")
    .replace("-", "")
    .replace("_", "")
    .split(' ')
  */

  /// return fullName.split("\\W+")
}


// Add the contents of options[0] to #foo:
///document.getElementById('foo').appendChild(makeUL(options[0]));
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote } from "electron";
import jetpack from "fs-jetpack";
import { greet } from "./hello_world/hello_world";
import env from "env";


const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// files from disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read("package.json", "json");
///const manifest = appDir.read("package.json", "json");
///const manifest = appDir.read("package.json", "json");
///const manifest = appDir.read("package.json", "json");
console.log("app.js", manifest)

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

document.querySelector("#app").style.display = "block";
document.querySelector("#greet").innerHTML = greet();
document.querySelector("#os").innerHTML = osMap[process.platform];
document.querySelector("#author").innerHTML = manifest.author;
document.querySelector("#env").innerHTML = env.name;
document.querySelector("#electron-version").innerHTML =
  process.versions.electron;

// document.querySelector("#buckets-list").innerHTML = bucketsList;
