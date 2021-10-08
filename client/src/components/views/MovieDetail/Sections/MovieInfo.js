import React from 'react'
import { Descriptions, Badge } from 'antd';

function MovieInfo(props) {

    let { movie } = props;

    return (
        <Descriptions title="영화 정보" bordered>
            <Descriptions.Item label="제목">{movie.original_title}</Descriptions.Item>
            <Descriptions.Item label="개봉일">{movie.release_date}</Descriptions.Item>           
            <Descriptions.Item label="상영 시간">{movie.runtime}</Descriptions.Item>     
        </Descriptions>
    )
}

export default MovieInfo
