import { Target } from '@serenity-js/protractor'
import { by } from 'protractor'

/**
 * This is called a "Lean Page Object".
 * Lean Page Objects describe interactive elements of a widget.
 * In this case, The list of examples at https://the-internet.herokuapp.com/
 */
export class ButtonPage {
  static customButton = Target.the('learn more').located(
    by.css('~CustomButton')
  )
  static changeButton = Target.the('change event').located(
    by.css('~ChangeButton')
  )
  static backHomeButton = Target.the('back button').located(
    by.css('~Home, back')
  )
}
