import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, FormGroup } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Search';
import { GridLoader } from 'react-spinners';
import PodcastResult from './PodcastResult';

class Search extends Component {

  onKeyDown(e){
    if(e.keyCode === 13){
      this.props.requestSearchPodcasts(e.currentTarget.value);
      console.log("Enter clicked");
    }
  }

  render() {
    return (
      <Grid fluid style={{marginTop: '10%'}}>
        <Row>
          <Col sm={4} />
          <Col sm={4}>
          <FormGroup>
              <FormControl onKeyDown={e => this.onKeyDown(e)} type="text" placeholder="Search" />
          </FormGroup> 
          </Col>
          <Col sm={4}>
          </Col>
        </Row>
          {this.renderData()}
        <Row>
        </Row>
      </Grid>
      );
  }

   renderData(){
    return this.props.searching 
      ? <div> {this.renderLoadingSpinner()} </div>
      : <ul> {this.props.podcasts.map(p => <PodcastResult podcast={p} requestGetFeed={this.props.requestGetFeed}/> )} </ul>
  }

  renderLoadingSpinner(){
    return <div className='loading-podcasts' 
                style={{display:'flex', justifyContent: 'center', alignItems:'center', marginTop: '30%'}}>
      <GridLoader 
        sizeUnit={'px'}
        size={50}
        color={'#333333'}
        loading={this.props.searching} />
    </div>
  }
}

export default connect(
  state => state.search,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Search);