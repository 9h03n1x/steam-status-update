import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { StatusUpdate } from "./actions/status-update";
import { OpenView } from "./actions/open-view";

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the increment action.
streamDeck.actions.registerAction(new StatusUpdate());
streamDeck.actions.registerAction(new OpenView());

// Finally, connect to the Stream Deck.
streamDeck.connect();

