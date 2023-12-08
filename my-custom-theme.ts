import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "12px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #69E067 
		"--color-primary-50": "233 250 232", // #e9fae8
		"--color-primary-100": "225 249 225", // #e1f9e1
		"--color-primary-200": "218 247 217", // #daf7d9
		"--color-primary-300": "195 243 194", // #c3f3c2
		"--color-primary-400": "150 233 149", // #96e995
		"--color-primary-500": "105 224 103", // #69E067
		"--color-primary-600": "95 202 93", // #5fca5d
		"--color-primary-700": "79 168 77", // #4fa84d
		"--color-primary-800": "63 134 62", // #3f863e
		"--color-primary-900": "51 110 50", // #336e32
		// secondary | #757083 
		"--color-secondary-50": "234 234 236", // #eaeaec
		"--color-secondary-100": "227 226 230", // #e3e2e6
		"--color-secondary-200": "221 219 224", // #dddbe0
		"--color-secondary-300": "200 198 205", // #c8c6cd
		"--color-secondary-400": "158 155 168", // #9e9ba8
		"--color-secondary-500": "117 112 131", // #757083
		"--color-secondary-600": "105 101 118", // #696576
		"--color-secondary-700": "88 84 98", // #585462
		"--color-secondary-800": "70 67 79", // #46434f
		"--color-secondary-900": "57 55 64", // #393740
		// tertiary | #E8F1F2 
		"--color-tertiary-50": "252 253 253", // #fcfdfd
		"--color-tertiary-100": "250 252 252", // #fafcfc
		"--color-tertiary-200": "249 252 252", // #f9fcfc
		"--color-tertiary-300": "246 249 250", // #f6f9fa
		"--color-tertiary-400": "239 245 246", // #eff5f6
		"--color-tertiary-500": "232 241 242", // #E8F1F2
		"--color-tertiary-600": "209 217 218", // #d1d9da
		"--color-tertiary-700": "174 181 182", // #aeb5b6
		"--color-tertiary-800": "139 145 145", // #8b9191
		"--color-tertiary-900": "114 118 119", // #727677
		// success | #69E067 
		"--color-success-50": "233 250 232", // #e9fae8
		"--color-success-100": "225 249 225", // #e1f9e1
		"--color-success-200": "218 247 217", // #daf7d9
		"--color-success-300": "195 243 194", // #c3f3c2
		"--color-success-400": "150 233 149", // #96e995
		"--color-success-500": "105 224 103", // #69E067
		"--color-success-600": "95 202 93", // #5fca5d
		"--color-success-700": "79 168 77", // #4fa84d
		"--color-success-800": "63 134 62", // #3f863e
		"--color-success-900": "51 110 50", // #336e32
		// warning | #D36135 
		"--color-warning-50": "248 231 225", // #f8e7e1
		"--color-warning-100": "246 223 215", // #f6dfd7
		"--color-warning-200": "244 216 205", // #f4d8cd
		"--color-warning-300": "237 192 174", // #edc0ae
		"--color-warning-400": "224 144 114", // #e09072
		"--color-warning-500": "211 97 53", // #D36135
		"--color-warning-600": "190 87 48", // #be5730
		"--color-warning-700": "158 73 40", // #9e4928
		"--color-warning-800": "127 58 32", // #7f3a20
		"--color-warning-900": "103 48 26", // #67301a
		// error | #C20114 
		"--color-error-50": "246 217 220", // #f6d9dc
		"--color-error-100": "243 204 208", // #f3ccd0
		"--color-error-200": "240 192 196", // #f0c0c4
		"--color-error-300": "231 153 161", // #e799a1
		"--color-error-400": "212 77 91", // #d44d5b
		"--color-error-500": "194 1 20", // #C20114
		"--color-error-600": "175 1 18", // #af0112
		"--color-error-700": "146 1 15", // #92010f
		"--color-error-800": "116 1 12", // #74010c
		"--color-error-900": "95 0 10", // #5f000a
		// surface | #001A23 
		"--color-surface-50": "217 221 222", // #d9ddde
		"--color-surface-100": "204 209 211", // #ccd1d3
		"--color-surface-200": "191 198 200", // #bfc6c8
		"--color-surface-300": "153 163 167", // #99a3a7
		"--color-surface-400": "77 95 101", // #4d5f65
		"--color-surface-500": "0 26 35", // #001A23
		"--color-surface-600": "0 23 32", // #001720
		"--color-surface-700": "0 20 26", // #00141a
		"--color-surface-800": "0 16 21", // #001015
		"--color-surface-900": "0 13 17", // #000d11
		
	}
}