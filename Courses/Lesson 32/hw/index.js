'use strict'

import { Book } from "./models/book.js";
import { Library } from "./library.js";
import { Reader } from "./models/reader.js";
import { Application } from "./application.js";

let application = new Application();
application.init();
application.renderBookTable();




