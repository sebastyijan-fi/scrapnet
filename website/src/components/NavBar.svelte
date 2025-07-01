<script>
  const links = [
    { href: "/", label: "Home" },
    /*  catalogue & about will appear when they exist
    { href: "/catalogue",  label: "Catalogue" },
    { href: "/about",      label: "About"     },
    */
  ];
</script>

<header
  role="navigation"
  aria-label="Primary"
  class="fixed inset-x-0 top-0 z-40 bg-[var(--bg)]/90 backdrop-blur
         flex items-center justify-between px-4 sm:px-8 py-3"
>
  <a
    href="/"
    class="font-mono text-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
  >
    ScrapNet
  </a>

  <ul class="hidden sm:flex space-x-6">
    {#each links as { href, label }}
      <li>
        <a
          {href}
          class="hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        >
          {label}
        </a>
      </li>
    {/each}
  </ul>
</header>
