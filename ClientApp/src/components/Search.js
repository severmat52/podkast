import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, FormGroup } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Search';

export class Search extends Component {
  constructor(props){
    super(props);
    
    this.state = {searchText: ""};

    this.onSearchTextChanged = this.onSearchTextChanged.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onSearchTextChanged(e){  
    this.setState({searchText: e.target.value});
    console.log("searchText - " + this.state.searchText);
  }

  onKeyDown(e){
    if(e.keyCode === 13){
      this.props.onSearch(this.state.searchText);
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
              <FormControl onKeyDown={this.onKeyDown} type="text" placeholder="Search" value={this.state.searchText} onChange={this.onSearchTextChanged} />
          </FormGroup> 
          </Col>
          <Col sm={4}>
          </Col>
        </Row>
        <Row>
          { this.renderData() }
        </Row>
      </Grid>
      );
  }

  renderData(){
    if(this.props.podcasts !== undefined){
      var pods = this.props.podcasts.map(p =>{
         <li>
          {p.collectionName}
        </li>
      });
      return <ul>
        {pods}
      </ul>
    }
    return <div></div>
  }
}

export default connect(
  state => state.podcasts,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Search);