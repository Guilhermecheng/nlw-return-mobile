import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';

import { captureScreen } from 'react-native-view-shot';

import { FeedbackType } from '../../components/Widget';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';

import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes'

import { styles } from './styles';

interface Props {
    feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
    const [screenshot, setScreenshot] = useState<string | null>(null);

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleScreenshot() {
        captureScreen({
            format: 'jpg',
            quality: 0.8
        }).then(uri => setScreenshot(uri)).catch(err => console.log(err))
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <ArrowLeft
                        size={24}
                        weight="bold"
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Image 
                        source={feedbackTypeInfo.image}
                        style={styles.image}
                    />
                    <Text style={styles.titleText}>
                        {feedbackTypeInfo.title}
                    </Text>
                </View>
            </View>

            <TextInput 
                multiline
                style={styles.input}
                placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalher o que está acontecendo"
                placeholderTextColor={theme.colors.text_secondary}
            />

            <View style={styles.footer}>
                <ScreenshotButton 
                    onTakeShot={handleScreenshot}
                    onRemoveShot={() => setScreenshot(null)}
                    screenshot={screenshot}
                />

                <Button isLoading={false} />
            </View>
        </View>
    )
}