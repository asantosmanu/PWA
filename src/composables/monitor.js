import {
  defineAsyncComponent,
  onMounted,
  onUnmounted,
  ref,
  shallowRef,
} from 'vue';

export function useMonitor() {
  const breakpoint = ref('sm');
  const menu = shallowRef(
    defineAsyncComponent(() => import('../components/MenuSuperiorXs.vue')),
  );

  const Footer = shallowRef(
    defineAsyncComponent(() => import('../components/FooterXs.vue')),
  )

  const updateBreakpoint = () => {
    const width = window.innerWidth;
    if (width < 576) {
      breakpoint.value = 'xs';

      menu.value = defineAsyncComponent(() =>
        import('../components/MenuSuperiorXs.vue'),
      );

      Footer.value = defineAsyncComponent(() =>
        import('../components/FooterXs.vue')
      );

    } else if (width < 768) {
      breakpoint.value = 'sm';

      menu.value = defineAsyncComponent(() =>
        import('../components/MenuSuperiorSm.vue'),
      );

      Footer.value = defineAsyncComponent(() =>
        import('../components/FooterSm.vue'),
      );

    } else if (width < 992) {
      breakpoint.value = 'md';
      menu.value = defineAsyncComponent(() =>
        import('../components/MenuSuperiorMd.vue'),
      );
      Footer.value = defineAsyncComponent(() =>
        import('../components/FooterMd.vue'),
      );
    } else if (width < 1200) {
      breakpoint.value = 'lg';
      menu.value = defineAsyncComponent(() =>
        import('../components/MenuSuperiorLg.vue'),
      );
      Footer.value = defineAsyncComponent(() =>
        import('../components/FooterLg.vue'),
      );
    } else {
      breakpoint.value = 'xl';
      menu.value = defineAsyncComponent(() =>
        import('../components/MenuSuperiorXl.vue'),
      );
      Footer.value = defineAsyncComponent(() =>
        import('../components/FooterXl.vue'),
      );
    }
  };

  onMounted(() => {
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoint);
  });

  return {
    breakpoint,
    menu,
    Footer
  };
}