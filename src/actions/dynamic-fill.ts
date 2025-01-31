import { action, DidReceiveSettingsEvent, KeyDownEvent, SingletonAction, WillAppearEvent } from "@elgato/streamdeck";
import open from "open";


@action({ UUID: "com.niccohagedorn.steam-status-update.GlobalSettings" })
export class DemoGlobalSettings extends SingletonAction<DemoSettings> {

	onWillAppear(ev: WillAppearEvent<DemoSettings>): void | Promise<void> {


		
	}

	onDidReceiveSettings(ev: DidReceiveSettingsEvent<DemoSettings>): Promise<void> | void {


	}


	async onKeyDown(ev: KeyDownEvent<DemoSettings>): Promise<void> {

	}
}

/**
 * Settings for {@link IncrementCounter}.
 */
type DemoSettings = {
	status?: string;
};
