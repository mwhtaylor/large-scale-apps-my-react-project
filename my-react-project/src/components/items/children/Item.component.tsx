// file: Item.component.tsx

import * as React from 'react'
// import reference to our interface
import { ItemInterface } from '@/models/items/Item.interface'

// example using class syntax
export class ItemComponent extends React.Component<{
  testid?: string
  model: ItemInterface
  onItemSelect: (item: ItemInterface) => void
}> {
  constructor(props: { testid?: string; model: ItemInterface; onItemSelect: (item: ItemInterface) => void }) {
    super(props)
  }

  get cssClass() {
    let css = 'item'
    if (this.props.model?.selected) {
      css += ' selected'
    }
    return css.trim()
  }

  handleItemClick(item: ItemInterface) {
    this.props.onItemSelect(item)
  }

  // <div className="name">{model.name} [{String(model.selected)}]</div>

  render(): React.ReactNode {
    const { model, testid } = this.props

    return (
      <li data-testid={testid || 'not-set'} className={this.cssClass} onClick={() => this.handleItemClick(model)}>
        <div className="selected-indicator">*</div>
        <div className="name">{model.name}</div>
      </li>
    )
  }
}
