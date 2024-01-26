import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';


export function toast(message: string) {
  const toastStore = getToastStore();
  const t: ToastSettings = {
    message: message
  };
  toastStore.trigger(t);
}
