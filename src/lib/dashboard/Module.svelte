<div class="dashboard-module">
    <div class="dashboard-module__title">
        <slot name="title" />
    </div>
    <div class="dashboard-module__content">
        <slot name="content" />
    </div>
</div>

<style>
    .dashboard-module {
        background: var(--pure-white);
        border-radius: 0.3em;
        padding: 1.6em;
        margin-bottom: 1em;
        box-shadow: 0 0.3em 1em 0 var(--primary-color);
    }

    .dashboard-module__title {
        padding-bottom: 0.75em;
        margin-bottom: 0.75em;
        border-bottom: 2px solid var(--tertiary-color);
        font-weight: 600;
    }
</style>