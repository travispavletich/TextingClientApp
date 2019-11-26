import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            radio: 'option2',
            color: 'success'
        };
    }
    
    radioChange = (event) => {
        this.setState({
            radio: event.target.value
        });
    }
    
    colorChange = (event) => {
        this.setState({
            color: event.target.value
        });
    }
    
    render() {
        return (
            <mobiscroll.Form theme="ios">
                <mobiscroll.FormGroup>
                    <mobiscroll.FormGroupTitle>Radio buttons</mobiscroll.FormGroupTitle>
            
                    <mobiscroll.Radio name="group" value="option1" checked={this.state.radio === 'option1'} onChange={this.radioChange}>
                        Radio Option 1
                        <span className="mbsc-desc">This is description for radio 1</span>
                    </mobiscroll.Radio>
                    <mobiscroll.Radio name="group" value="option2" checked={this.state.radio === 'option2'} onChange={this.radioChange}>
                        Radio Option 2
                        <span className="mbsc-desc">This is description for radio 2</span>
                    </mobiscroll.Radio>
                    <mobiscroll.Radio name="group" value="option3" checked={this.state.radio === 'option3'} onChange={this.radioChange}>
                        Radio Option 3
                    </mobiscroll.Radio>
                    <mobiscroll.Radio name="group" disabled value="option4" checked={this.state.radio === 'option4'} onChange={this.radioChange}>
                        Disabled
                    </mobiscroll.Radio>
                </mobiscroll.FormGroup>
                <mobiscroll.FormGroup>
                    <mobiscroll.FormGroupTitle>Radio button colors</mobiscroll.FormGroupTitle>
            
                    <mobiscroll.Radio color="primary" name="color" value="primary" checked={this.state.color === 'primary'} onChange={this.colorChange}>
                        Primary
                    </mobiscroll.Radio>
                    <mobiscroll.Radio color="secondary" name="color" value="secondary" checked={this.state.color === 'secondary'} onChange={this.colorChange}>
                        Secondary
                    </mobiscroll.Radio>
                    <mobiscroll.Radio color="success" name="color" value="success" checked={this.state.color === 'success'} onChange={this.colorChange}>
                        Success
                    </mobiscroll.Radio>
                    <mobiscroll.Radio color="danger" name="color" value="danger" checked={this.state.color === 'danger'} onChange={this.colorChange}>
                        Danger
                    </mobiscroll.Radio>
                    <mobiscroll.Radio color="warning" name="color" value="warning" checked={this.state.color === 'warning'} onChange={this.colorChange}>
                        Warning
                    </mobiscroll.Radio>
                    <mobiscroll.Radio color="info" name="color" value="info" checked={this.state.color === 'info'} onChange={this.colorChange}>
                        Info
                    </mobiscroll.Radio>
                </mobiscroll.FormGroup>
            </mobiscroll.Form>
        );
    }    
}
