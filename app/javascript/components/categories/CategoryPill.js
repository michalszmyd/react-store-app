import React from 'react';
import { X } from 'react-feather';

class CategoryPill extends React.Component {
  state = {
    checked: false
  }

  toggleCategory = () => {
    this.setState({
      checked: !this.state.checked
    }, () => {
      if (this.state.checked) {
        this.props.addFilterCategoryId(this.props.category.id)
      } else {
        this.props.removeFilterCategoryId(this.props.category.id)
      }
    })
  }

  render () {
    const checked = this.state.checked;
    const { name } = this.props.category;

    return (
      <div className={`category-pill ${checked ? 'focused' : ''}`} onClick={this.toggleCategory}>
        <span>{name}</span>
        { checked ? <span className="close-icon"><X width="12" height="12" /></span> : null }
      </div>
    )
  }
}

export default CategoryPill;
