/* eslint-disable @typescript-eslint/no-empty-function, class-methods-use-this, no-undef*/

// declare module 'part:@sanity/components/*' {
//   class GenericSanityComponent extends React.Component<any> {
//     focus() {}
//   }
//   export default GenericSanityComponent
// }

declare module 'part:@sanity/components/avatar' {
  export * from '@sanity/components/src/avatar'
}

declare module 'part:@sanity/components/fieldsets/default' {
  export default class DefaultFieldset extends React.PureComponent<any> {
    focus: () => void
  }
}

declare module 'part:@sanity/components/menu-button' {
  export * from '@sanity/components/src/menuButton'
}

declare module 'part:@sanity/components/popover' {
  export * from '@sanity/components/src/popover'
}

declare module 'part:@sanity/components/portal' {
  export * from '@sanity/components/src/portal'
}

declare module 'part:@sanity/components/selects/*' {
  export default class SanitySelectComponent extends React.Component<any> {
    focus: () => void
  }
}

declare module 'part:@sanity/components/tags/*' {
  export default class SanityTagsComponent extends React.Component<any> {
    focus: () => void
  }
}

declare module 'part:@sanity/components/textareas/*' {
  export default class SanityTextareaComponent extends React.Component<any> {
    focus: () => void
  }
}

declare module 'part:@sanity/components/textinputs/*' {
  export default class SanityTextinputComponent extends React.Component<any> {
    focus: () => void
  }
}

declare module 'part:@sanity/components/toggles/*' {
  export default class SanityToggleComponent extends React.Component<any> {
    focus: () => void
  }
}

declare module 'part:@sanity/components/tooltip' {
  export * from '@sanity/components/src/tooltip'
}

declare module 'config:@sanity/form-builder'
declare module 'all:part:@sanity/form-builder/input/image/asset-source'

declare module 'part:@sanity/components/utilities/portal'
declare module 'part:@sanity/components/lists/*'
declare module 'part:@sanity/*'
