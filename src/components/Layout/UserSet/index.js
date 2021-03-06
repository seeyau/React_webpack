import React from 'react';
import './index.scss';
import { Button, Input , Select ,Modal } from 'antd';
class userSet extends React.Component {
    constructor() {
        super();
        this.state = {
            Loading: false,
            visible: false,
            init:true
        }
    }

    showModal() {
        this.setState({
            visible: true,
        });
    }
    handleOk() {
        this.setState({ Loading: true });
        setTimeout(() => {
            this.setState({ Loading: false, visible: false });
        }, 3000);
    }
    handleCancel() {
        this.setState({ visible: false }); 
    }
    themeChange(e) {
        document.getElementById('theme').setAttribute('href',null);
        this.setState({
            init : true
        })
    }
    themeChange1() {
        document.getElementById('theme').setAttribute('href','/build/css/theme-02.css');
        this.setState({
            init : false
        })
    }
    render() {
        function handleChange(value) {
            console.log(`selected ${value}`);
        } 
        let block = this.state.init ? 'iconfont activeClick icon-xuanzhong' : 'iconfont icon-xuanzhong';
        let other = this.state.init ? 'iconfont icon-xuanzhong' : 'iconfont activeClick icon-xuanzhong';
        return (
            <div className="userImg" onClick={this.showModal.bind(this)}>
                <div className="IMG"></div>
                <div className="dot"></div>
                <Modal
                    visible={this.state.visible}
                    title="用户设置"
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    width='380px'
                    wrapClassName="UserSetCont"
                    footer={[
                    <Button key="back" size="large" onClick={this.handleCancel.bind(this)}>取消</Button>,
                    <Button key="submit" type="primary" size="large" loading={this.state.Loading} onClick={this.handleOk.bind(this)}>
                        提交
                    </Button>
                    ]}
                >
                    <div className="form-col-ipt">
                        <div style={{width:'100%'}}>
                            <div className='userImg'></div>
                            <h3 className='userName'>admin</h3>
                        </div>
                    </div>
                    <div className="form-col-ipt">
                        <div className='themeOut'>
                            <div className='themeOut-col' style={{background:'#3A3F4E'}} onClick={this.themeChange.bind(this)}>
                                主题一
                                <i className={block}></i>
                            </div>
                        </div>
                        <div className='themeOut'>
                            <div className='themeOut-col' style={{background:'#1EC185'}} onClick={this.themeChange1.bind(this)}>
                                主题二
                                <i className={other}></i>
                            </div>
                        </div>
                    </div>
                    <div className="form-col-ipt">
                        <div className="title">
                            部门编号:
                        </div>
                        <div className="ipt">
                            <Input size="large" placeholder="部门编号" />
                        </div>
                    </div>
                    <div className="form-col-ipt">
                    <span className="title">
                        部门名称:
                    </span>
                        <div className="ipt">
                            <Input size="large" placeholder="部门名称" />
                        </div>
                    </div>
                    <div className="form-col-ipt">
                        <div className="title">
                            部门简码:
                        </div>
                        <div className="ipt">
                            <Input size="large" placeholder="部门简码" />
                        </div>
                    </div>
                    <div className="form-col-ipt">
                        <div className="title">
                            上级部门:
                        </div>
                        <div className="ipt">
                            <Select defaultValue="all" style={{ width: 100 }} onChange={handleChange}>
                                <Option value="all">无上级</Option>
                                <Option value="jack">西充</Option>
                                <Option value="lucy">管理员</Option>
                            </Select>
                        </div>

                    </div>
                    <div className="form-col-ipt">
                        <div className="title">
                            数据状态:
                        </div>
                        <div className="ipt">
                            <Select defaultValue="all" style={{ width: 100 }} onChange={handleChange}>
                                <Option value="all">启用</Option>
                                <Option value="jack">停用</Option>
                            </Select>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default userSet;