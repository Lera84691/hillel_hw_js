import React from "react";
import { fetchPopularRepos } from "../../utils/api";
import { SelectedLanguage } from "./SelectedLanguage";
import { Repos } from "./Repos";
import Load from "./Load";


class Popular extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedLanguage: "All",
            repos: null,
            isLoading: false
        }
    }

    fetchPopularReposHamdler = (lang) => {
        fetchPopularRepos(lang)
            .then(data => this.setState({ repos: data, isLoading: false }))
    }
    componentDidMount() {
        this.fetchPopularReposHamdler(this.state.selectedLanguage)
    }

    selectLanguage = (lang) => {
        this.setState({isLoading:true})
        this.setState({ selectedLanguage: lang, repos: null}, ()=>{
            this.fetchPopularReposHamdler(this.state.selectedLanguage)
        })
    }

    render() {
        return (
            <>
                <Load active={this.state.isLoading}/>
                <SelectedLanguage 
                    selectedLanguage={this.state.selectedLanguage}
                    selectLanguageHandler={this.selectLanguage}
                    disabled={this.state.isLoading}
                />
                <Repos data={this.state.repos}/>
            </>
        )
    }
}

export default Popular