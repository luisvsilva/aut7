/* eslint-disable no-undef */
import 'aurelia-bootstrapper'
import { Aurelia, PLATFORM } from 'aurelia-framework';

export function configure (aurelia: Aurelia) {
  aurelia.use
    .basicConfiguration()
    .developmentLogging()

  aurelia.start().then(() => {
    aurelia.setRoot()
  })
}
