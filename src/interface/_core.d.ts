import { Core, status } from "../lib/core.d";
import { Plugin } from "../plugins/Plugin.d";
import { SunEditorOptions } from "../options.d";
import { Context } from "../lib/context.d";
import { History } from "../lib/history.d";
import Util from "../helper/util.d";

class CoreInterface {
	editor: Core;
	_w: Window;
	_d: Document;
	plugins: Record<string, Plugin>;
	status: status;
	options: SunEditorOptions;
	context: Context;
	history: History;
	util: Util;
}

export default CoreInterface;
