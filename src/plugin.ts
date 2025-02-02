import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { StatusUpdate } from "./actions/status-update";
import { OpenView } from "./actions/open-view";
import { DemoGlobalSettings } from "./actions/dynamic-fill";

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

streamDeck.settings.setGlobalSettings({list: ["demo", "demo2", "demo3"]});

// Register the increment action.
streamDeck.actions.registerAction(new StatusUpdate());
streamDeck.actions.registerAction(new OpenView());
streamDeck.actions.registerAction(new DemoGlobalSettings());


// Finally, connect to the Stream Deck.
streamDeck.connect();

