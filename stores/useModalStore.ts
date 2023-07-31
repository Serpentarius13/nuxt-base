import { defineStore } from "pinia";

import { extend } from "@vue/shared";

import { lockBody, unlockBody } from "~/src/shared/features/utils/overflow";
import { IframeHTMLAttributes } from "nuxt/dist/app/compat/capi";
import ModalIFrameVue from "~/src/widgets/other/Modal/ModalIFrame.vue";
import { IModalSuccessProps } from "~/src/shared/ui/Modal/success/modal-success.types";
import ModalSuccess from "~/src/shared/ui/Modal/success/ModalSuccess.vue";

const component = extend({});
type VueComponent = InstanceType<typeof component>;

// ? Тип компонента должен работать.
// ? Если ругается, снести нахер или при наличии избыточной тонны времени пофиксить
export interface IStoreProps {
  component: null | VueComponent;
  props?: object;
}

export interface IStoreState {
  modalState: IStoreProps;
}

const useModalStore = defineStore("modalStore", {
  state: (): IStoreState => ({
    modalState: { component: null, props: {} },
  }),
  actions: {
    /**
     * Open modal with providing vue component and/or props
     */
    openModal(payload: IStoreProps) {
      const { props, component } = payload;

      lockBody();

      this.modalState = { component, props: props || {} };
    },

    /**
     * Closes modal
     */
    closeModal() {
      const basicState: IStoreProps = { component: null, props: {} };
      this.modalState = basicState;

      unlockBody();
    },

    openIFrameModal(url: string) {
      const options: IframeHTMLAttributes = {
        src: url,
      };

      this.openModal({ component: ModalIFrameVue, props: options });
    },

    openSuccessModal(options: IModalSuccessProps) {
      this.openModal({ component: ModalSuccess, props: options });
    },
  },
});

export default useModalStore;
