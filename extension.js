// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-

const Main = imports.ui.main;
const Lang = imports.lang;

let menu, item;

function init() {
    menu = Main.panel.statusArea['aggregateMenu']._system;
    item = menu._actionsItem;
}

function enable() {
    item.actor.remove_actor(menu._altSwitcher.actor);
}

function disable() {
    item.actor.add(menu._altSwitcher.actor, { expand: true, x_fill: false });
}
