export class Tabs {
    constructor() {
        this._initTabs();
    }

    _initTabs() {
        this.tabs = document.querySelectorAll('[role="tab"]');
        this.tabList = document.querySelector('[role="tablist"]');

        this.addEvents();
    }

    addEvents() {
        // Add a click event handler to each tab
        this.tabs.forEach((tab) => {
            tab.addEventListener("click", this.changeTabs.bind(this));
        });

        // Enable arrow navigation between tabs in the tab list
        let tabFocus = 0;
        this.tabList.addEventListener("keydown", (e) => {
            // Move right
            if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                this.tabs[tabFocus].setAttribute("tabindex", -1);
                if (e.key === "ArrowRight") {
                    tabFocus++;
                    // If we're at the end, go to the start
                    if (tabFocus >= this.tabs.length) {
                        tabFocus = 0;
                    }
                    // Move left
                } else if (e.key === "ArrowLeft") {
                    tabFocus--;
                    // If we're at the start, move to the end
                    if (tabFocus < 0) {
                        tabFocus = this.tabs.length - 1;
                    }
                }

                this.tabs[tabFocus].setAttribute("tabindex", 0);
                this.tabs[tabFocus].focus();
            }
        });
    }

    changeTabs(e) {
        const target = e.target.closest("[aria-controls]");
        const parent = target.parentNode;
        const grandparent = parent.parentNode;

        // Remove all current selected tabs
        parent
            .querySelectorAll('[aria-selected="true"]')
            .forEach((t) => t.setAttribute("aria-selected", false));

        // Set this tab as selected
        target.setAttribute("aria-selected", true);

        // Hide all tab panels
        grandparent
            .querySelectorAll('[role="tabpanel"]')
            .forEach((p) => p.setAttribute("aria-hidden", true));

        // Show the selected panel
        grandparent.parentNode
            .querySelector(`#${target.getAttribute("aria-controls")}`)
            .removeAttribute("aria-hidden");
    }
}

export function initTabs() {
    new Tabs();
}