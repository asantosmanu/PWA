<script setup>
import ListagemProdutos from '@/components/ListagemProdutos.vue';
import MenuSuperior from '@/components/MenuSuperior.vue';
import FooterDesktop from '@/components/FooterDesktop.vue';
import FooterMobile from '@/components/FooterMobile.vue';
import {useScreen} from '@/composables/screen'

const {isMobile} = useScreen()
</script>

<template>
  <MenuSuperior />
  <ListagemProdutos />
  <FooterDesktop v-if="!isMobile"/>
  <FooterMobile v-else/>
</template>