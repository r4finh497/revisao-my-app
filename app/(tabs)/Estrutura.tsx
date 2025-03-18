import { StyleSheet, Image, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Emulator</ThemedText>
      </ThemedView>
      <ThemedText>
      Organização do Projeto no Android Studio:
manifests - Contém o arquivo AndroidManifest.xml, que define permissões e configurações do app
java - Código-fonte do app, incluindo atividades e classes em Java ou Kotlin
res - Recursos visuais e layouts
layout - Arquivos XML das telas do app
drawable - Imagens e ícones
values - Cores, strings e dimensões
Gradle Scripts - Arquivos de configuração do projeto, como dependências e versões do SDK</ThemedText>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
