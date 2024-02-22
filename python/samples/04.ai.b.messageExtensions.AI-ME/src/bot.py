"""
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the MIT License.

Description: initialize the app and listen for `message` activitys
"""

import sys
import traceback

from botbuilder.core import TurnContext
from botbuilder.integration.aiohttp import ConfigurationBotFrameworkAuthentication
from teams import Application, ApplicationOptions, TurnState

from config import Config

config = Config()

if config.OPENAI_KEY is None and config.AZURE_OPENAI_KEY is None:
    raise Exception('Missing environment variables - please check that OPENAI_KEY or AZURE_OPENAI_KEY is set.')

app = Application[TurnState](
    ApplicationOptions(
        bot_app_id=config.APP_ID,
        auth=ConfigurationBotFrameworkAuthentication(config),
    )
)


@app.activity("message")
async def on_message(context: TurnContext, _state: TurnState):
    await context.send_activity(f"you said: {context.activity.text}")
    return True


@app.error
async def on_error(context: TurnContext, error: Exception):
    # This check writes out errors to console log .vs. app insights.
    # NOTE: In production environment, you should consider logging this to Azure
    #       application insights.
    print(f"\n [on_turn_error] unhandled error: {error}", file=sys.stderr)
    traceback.print_exc()

    # Send a message to the user
    await context.send_activity("The bot encountered an error or bug.")
