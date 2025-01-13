import { action, DidReceiveSettingsEvent, KeyDownEvent, SingletonAction, WillAppearEvent } from "@elgato/streamdeck";
import open from "open";


@action({ UUID: "com.niccohagedorn.steam-status-update.openview" })
export class OpenView extends SingletonAction<OpenSettings> {

	onWillAppear(ev: WillAppearEvent<OpenSettings>): void | Promise<void> {
		const settings = ev.payload.settings;
		ev.action.setImage(`imgs/actions/openview/${settings.openview}.png`);

		
	}

	onDidReceiveSettings(ev: DidReceiveSettingsEvent<OpenSettings>): Promise<void> | void {
		const settings = ev.payload.settings;
		ev.action.setImage(`imgs/actions/openview/${settings.openview}.png`);

	}


	async onKeyDown(ev: KeyDownEvent<OpenSettings>): Promise<void> {
		// Update the count from the settings.
		// steam://open/account
		// steam://open/games
		// steam://open/friends
		// steam://open/interface
		// steam://open/downloads
        // steam://open/settings
	
		const settings = ev.payload.settings;
		open(`steam://open/${settings.openview}`)
	}
}

/**
 * Settings for {@link IncrementCounter}.
 */
type OpenSettings = {
	openview?: string;
};
