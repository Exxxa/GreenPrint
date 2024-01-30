import type { AdminModel, AuthModel } from 'pocketbase'
import { writable } from 'svelte/store'

export const currentUser = writable<AuthModel | AdminModel | null>()
