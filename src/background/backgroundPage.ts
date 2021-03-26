import { browser } from "webextension-polyfill-ts";
import WalletService from "@src/background/services/wallet";
import {MessageAction} from "@src/util/postMessage";
import {AppService} from "@src/util/svc";
import SettingService from "@src/background/services/setting";

(async function() {
    const app = new AppService();
    app.add('wallet', new WalletService());
    app.add('setting', new SettingService());
    await app.start();

    browser.runtime.onMessage.addListener(async (request: any, sender: any) => {
        return handleMessage(app, request);
    });
})();

function handleMessage(app: AppService, message: MessageAction) {
    switch (message) {
        default:
            return null;
    }
}

