import { Target } from '@serenity-js/protractor'
import { by } from 'protractor'

/**
 * This is called a "Lean Page Object".
 * Lean Page Objects describe interactive elements of a widget.
 * In this case, The list of examples at https://the-internet.herokuapp.com/
 */
export class HomePage {
  static button = Target.the('button').located(by.css('~Button'))
  static calendar = Target.the('calendar').located(by.css('~Calendar'))
}
