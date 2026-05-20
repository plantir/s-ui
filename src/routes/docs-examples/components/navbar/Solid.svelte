<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 's-ui';
</script>

<Navbar class="bg-primary-100 dark:bg-primary-700">
	<NavBrand href="/">
		<img src="/images/s-ui-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/docs/components/navbar">Navbar</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>
