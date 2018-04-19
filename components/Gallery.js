import React, { Component } from 'react';

const Selected = (props) => (
	<div className={`Selected ${props.phase ? `Selected--${props.phase} Selected--moving-${props.direction}` : ''}`}>
		<style jsx>{`
			.Selected {
				position: absolute;
				width: 100%;
				height: 100%;
				overflow: hidden;
			}
			.Selected__image {
				box-shadow: inset 0 0 50px 0 black;
				position: absolute;
				top: 50%;
				left: 50%;
				height: 125%;
				width: 125%;
				background-repeat: no-repeat;
				background-size: contain;
				background-position: center;
				transform: translate3d(-50%, -50%, 0) scale(0.85);
				transition: transform 2500ms cubic-bezier(0.075, 0.82, 0.165, 1);
				transform-origin: 50% 50%;
			}
			.Selected:before, .Selected:after {
				content: '';
				background: white;
				position: absolute;
				top: -2%;
				height: 104%;
				width: 102%;
			}
			.Selected:before {
				right: 101%;
				z-index: 2;
			}
			.Selected:after {
				left: 101%;
			}
			.Selected--entering:before, .Selected--entering:after {
				transition: transform 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
			}
			.Selected--entering.Selected--moving-left {
				transition: transform 300ms cubic-bezier(0.6, 0.04, 0.98, 0.335);
			}
			.Selected--entering.Selected--moving-left:after {
				transform: translateX(-100%);
			}
			.Selected--entering.Selected--moving-left .Selected__image {
				transform: translate3d(-42.5%, -50%, 0) scale(0.85) skew(-5deg);
				transition: transform 1ms linear 300ms;
			}
			.Selected--entering.Selected--moving-right {
				transition: transform 300ms cubic-bezier(0.6, 0.04, 0.98, 0.335);
			}
			.Selected--entering.Selected--moving-right:before {
				transform: translateX(100%);
			}
			.Selected--entering.Selected--moving-right .Selected__image {
				transform: translate3d(-57.5%, -50%, 0) scale(0.85) skew(5deg);
				transition: transform 1ms linear 300ms;
			}
			.Selected--exiting:before, .Selected--exiting:after {
				transition: transform 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
			}
			.Selected--exiting.Selected--moving-left:after {
				transform: translateX(-200%);
			}
			.Selected--exiting.Selected--moving-right:before {
				transform: translateX(200%);
			}
		`}</style>
		<div className="Selected__image"  style={{backgroundImage: `url(${props.src})`}}/>
	</div>
);

const Thumb = (props) => (
	<div className={`Thumb Thumb--offset${props.offset}`} onClick={ () => { props.select(props.index, props.offset) } }>
		<style jsx>{`
			.Thumb {
				position: absolute;
				bottom: 0;
				left: 50%;
				width: 15%;
				height: 80%;
				display: inline-block;
				cursor: pointer;
				transform: translateX(-100vw);
				opacity: 0;
			}
			.Thumb__inner {
				box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.8);
				position: absolute;
				width: 125%;
				height: 80%;
				top: 50%;
				left: 50%;
				background-size: cover;
				background-position: center;
				transform: scale(0.8) translate3d(-50%, -50%, 0);
				transform-origin: left top;
				transition: transform 2500ms cubic-bezier(0.075, 0.82, 0.165, 1);
			}
			.Thumb:hover .Thumb__inner {
				transition: transform 2500ms cubic-bezier(0.075, 0.82, 0.165, 1);
				transform: scale(1.2) translate3d(-50%, -50%, 0);
			}
			.Thumb--offset-4, .Thumb--offset-3, .Thumb--offset-2, .Thumb--offset-1, .Thumb--offset0, .Thumb--offset1, .Thumb--offset2, .Thumb--offset3, .Thumb--offset4 {
				opacity: 1;
				transition: transform 2500ms cubic-bezier(0.075, 0.82, 0.165, 1), opacity 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
			}
			.Thumb--offset-5, .Thumb--offset-6, .Thumb--offset-7 {
				transform: translateX(-700%);
			}
			.Thumb--offset-4 {
				transform: translateX(-550%);
				transition-delay: 150ms;
			}
			.Thumb--offset-3 {
				transform: translateX(-425%);
				transition-delay: 112.5ms;
			}
			.Thumb--offset-2 {
				transform: translateX(-300%);
				transition-delay: 75ms;
			}
			.Thumb--offset-1 {
				transform: translateX(-175%);
				transition-delay: 37.5ms;
			}
			.Thumb--offset0 {
				transform: translateX(-50%);
				transition-delay: 0ms;
			}
			.Thumb--offset0 .Thumb__inner {
				transform: scale(0.8) translate3d(-50%, -50%, 0) !important;
			}
			.Thumb--offset1 {
				transform: translateX(75%);
				transition-delay: 37.5ms;
			}
			.Thumb--offset2 {
				transform: translateX(200%);
				transition-delay: 75ms;
			}
			.Thumb--offset3 {
				transform: translateX(325%);
				transition-delay: 112.5ms;
			}
			.Thumb--offset4 {
				transform: translateX(450%);
				transition-delay: 150ms;
			}
			.Thumb--offset5, .Thumb--offset6, .Thumb--offset7 {
				transform: translateX(600%);
			}
		`}</style>
		<div className="Thumb__inner" style={{backgroundImage: `url(${props.src})`}}/>
	</div>
);

const positions = [-2, -1, 0, 1, 2];

const Thumbs = (props) => (
	<div className={`Thumbs ${props.phase ? `Thumbs--${props.phase} Thumbs--moving-${props.direction}` : ''}`}>
		<style jsx>{`
			.Thumbs {
				text-align: center;
				position: relative;
				position: absolute;
				width: 100%;
				height: 100%;
				transform-origin: 50% 50%;
				transition: transform 2500ms cubic-bezier(0.075, 0.82, 0.165, 1);
			}
			.Thumbs--entering {
				transition: transform 1ms linear;
			}
			.Thumbs--entering.Thumbs--moving-left {
				transform: skewX(3deg);
			}
			.Thumbs--entering.Thumbs--moving-right {
				transform: skewX(-3deg);
			}
		`}</style>
    { props.images.map( (src, index) => {
      const count = props.images.length;
      let offset = index - props.active
      if (offset > count/2)
        offset -= count
      else if (offset < -count/2)
        offset += count
      return (
        <Thumb
          src={src} 
          key={index} 
          index={index}
          offset={offset}
          select={props.select} />
      );
    }) }
  </div>
);

export default class Gallery extends Component {
	constructor(props) {
		super(props);
		let loopedImages = props.images;
		while(loopedImages.length < 13)
			loopedImages = loopedImages.concat(props.images)
		this.state = {
			active: 0,
			showing: 0,
			phase: null,
			direction: 'left',
			loopedImages
		}
	}
	
	componentDidMount() {
		setTimeout(() => {
			this.selectImage(1,1);		
		}, 1000);
	}
	
	selectImage(index, offset) {
		if (!this.state.phase && offset !== 0){
			this.setState({ 
				active: index,
				phase: 'entering',
				direction: offset >= 0  ? 'left' : 'right'
			});
			
			setTimeout(() => {
				this.setState({ 
					changing: false, 
					showing: index,
					phase: 'exiting'
				});
				setTimeout(() => {
					this.setState({ phase: null });
				}, 300);
			}, 400)
		}
	}
	
	render() {
		const {
			baseURL='',
			largePrefix='',
			thumbPrefix=''
		} = this.props;
		const {
			loopedImages,
			active,
			showing,
			phase,
			direction
		} = this.state;
		
		const selected = `${baseURL}${largePrefix}${loopedImages[showing]}`;
		const thumbs = loopedImages.map((file) => `${baseURL}${thumbPrefix}${file}`);
		
		return (
			<React.Fragment>
				<style jsx>{`					
					.Gallery {
						overflow: hidden;
						height: 710px;
						width: 100%;
						max-width: 500px;
						transform: translate3d(0, 0, 0);
					}
					.Gallery__selected {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 70%;
					}
					.Gallery__thumbs {
						position: absolute;
						bottom: 8%;
						left: 0;
						width: 100%;
						height: 20%;
					}
				`}</style>
				<div className="Gallery">
					<div className="Gallery__selected">
						<Selected
							src={ selected } 
							phase={ phase } 
							direction={ direction } />
					</div>
					<div className="Gallery__thumbs">
						<Thumbs
							images={ thumbs } 
							active={ active }
							select={ this.selectImage.bind(this) }
							phase={ phase } 
							direction={ direction } />
					</div>
				</div>
			</React.Fragment>
		)
	}
}