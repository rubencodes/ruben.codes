import React, { Component } from "react";
import classnames from "classnames";

import styles from "./InlineGallery.module.css";

const Selected = ({ phase, direction, src }) => (
  <div
    className={classnames(styles.selected, {
      [styles[`selected--${phase}`]]: phase,
      [styles[`selected--moving-${direction}`]]: phase,
    })}
  >
    <div
      className={styles.selected__image}
      style={{ backgroundImage: `url(${src})` }}
    />
  </div>
);

const Thumb = ({ offset, index, src, select }) => (
  <div
    className={classnames(styles.thumb, styles[`thumb--offset${offset}`])}
    onClick={() => select(index, offset)}
  >
    <div
      className={styles.thumb__inner}
      style={{ backgroundImage: `url(${src})` }}
    />
  </div>
);

function calculateOffset(count, index, active) {
  let offset = index - active;

  if (offset > count / 2) {
    offset -= count;
  } else if (offset < -count / 2) {
    offset += count;
  }

  return offset;
}

const Thumbs = ({ phase, direction, images, select, active }) => (
  <div
    className={classnames(styles.thumbs, {
      [styles[`thumbs--${phase}`]]: phase,
      [styles[`thumbs--moving-${direction}`]]: phase,
    })}
  >
    {images.map((src, index) => (
      <Thumb
        src={src}
        key={index}
        index={index}
        offset={calculateOffset(images.length, index, active)}
        select={select}
      />
    ))}
  </div>
);

class InlineGallery extends Component {
  constructor(props) {
    super(props);
    let loopedImages = props.images;
    while (loopedImages.length < 13)
      loopedImages = loopedImages.concat(props.images);
    this.state = {
      active: 0,
      showing: 0,
      phase: null,
      direction: "left",
      loopedImages,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.selectImage(1, 1);
    }, 1000);
  }

  selectImage(index, offset) {
    if (!this.state.phase && offset !== 0) {
      this.setState({
        active: index,
        phase: "entering",
        direction: offset >= 0 ? "left" : "right",
      });

      setTimeout(() => {
        this.setState({
          changing: false,
          showing: index,
          phase: "exiting",
        });
        setTimeout(() => {
          this.setState({ phase: null });
        }, 300);
      }, 400);
    }
  }

  render() {
    const { baseURL = "", largePrefix = "", thumbPrefix = "" } = this.props;
    const { loopedImages, active, showing, phase, direction } = this.state;

    const selected = `${baseURL}${largePrefix}${loopedImages[showing]}`;
    const thumbs = loopedImages.map(
      (file) => `${baseURL}${thumbPrefix}${file}`
    );

    return (
      <div className={styles.gallery}>
        <div className={styles.gallery__selected}>
          <Selected src={selected} phase={phase} direction={direction} />
        </div>
        <div className={styles.gallery__thumbs}>
          <Thumbs
            images={thumbs}
            active={active}
            select={this.selectImage.bind(this)}
            phase={phase}
            direction={direction}
          />
        </div>
      </div>
    );
  }
}

export default InlineGallery;
