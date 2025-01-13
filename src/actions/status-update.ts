import { action, DidReceiveSettingsEvent, KeyDownEvent, SingletonAction, WillAppearEvent } from "@elgato/streamdeck";
import open from "open";


@action({ UUID: "com.niccohagedorn.steam-status-update.status" })
export class StatusUpdate extends SingletonAction<StatusSettings> {

	onWillAppear(ev: WillAppearEvent<StatusSettings>): void | Promise<void> {
		const settings = ev.payload.settings;
		ev.action.setImage(`imgs/actions/status/${settings.status}.png`);

		
	}

	onDidReceiveSettings(ev: DidReceiveSettingsEvent<StatusSettings>): Promise<void> | void {
		const settings = ev.payload.settings;
		ev.action.setImage(`imgs/actions/status/${settings.status}.png`);

	}


	async onKeyDown(ev: KeyDownEvent<StatusSettings>): Promise<void> {
		// Update the count from the settings.
		// steam://friends/status/offline
		// steam://friends/status/online
		// steam://friends/status/invisible
		// steam://friends/status/away
	
		const settings = ev.payload.settings;
		open(`steam://friends/status/${settings.status}`)
	}
}

/**
 * Settings for {@link IncrementCounter}.
 */
type StatusSettings = {
	status?: string;
};
