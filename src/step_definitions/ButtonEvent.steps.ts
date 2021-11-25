import 'expect-webdriverio'

import { Then, When } from '@cucumber/cucumber'
import { Actor, Check } from '@serenity-js/core'
import { isVisible, Click } from '@serenity-js/protractor'
import { ButtonPage } from '../page-objects/button.page'
import { HomePage } from '../page-objects/home.page'


When(
  '{pronoun} want to trigger button event to change the button title',
   (actor: Actor) => {
      Check.whether(ButtonPage.changeButton, isVisible()).andIfSo(
        Click.on(ButtonPage.changeButton)
)})

Then(
  '{pronoun} is able to see the button title changed',
   (actor: Actor) => {
       Check.whether(ButtonPage.backHomeButton, isVisible()).andIfSo(
        Click.on(ButtonPage.backHomeButton))
  }
)
